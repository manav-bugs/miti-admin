import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api';

interface PlanState {
  items: any[];
  loading: boolean;
  error: string | null;
}

const initialState: PlanState = {
  items: [],
  loading: false,
  error: null,
};

// Fetch all plans
export const fetchPlans = createAsyncThunk('plans/fetchPlans', async (_, { rejectWithValue }) => {
  try {
    const response = await api.get('/plan');
    return response.data.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || 'Failed to fetch plans');
  }
});

// Create a new plan
export const addPlan = createAsyncThunk('plans/addPlan', async (planData: any, { rejectWithValue }) => {
  try {
    const response = await api.post('/plan', planData);
    return response.data.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || 'Failed to add plan');
  }
});

// Update a plan
export const updatePlan = createAsyncThunk('plans/updatePlan', async ({ id, data }: { id: string; data: any }, { rejectWithValue }) => {
  try {
    const response = await api.put(`/plan/${id}`, data);
    return response.data.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || 'Failed to update plan');
  }
});

// Soft delete a plan
export const deletePlan = createAsyncThunk('plans/deletePlan', async (id: string, { rejectWithValue }) => {
  try {
    await api.delete(`/plan/${id}`);
    return id;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || 'Failed to delete plan');
  }
});

const planSlice = createSlice({
  name: 'plans',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlans.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPlans.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchPlans.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(addPlan.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updatePlan.fulfilled, (state, action) => {
        const index = state.items.findIndex((p) => p._id === action.payload._id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(deletePlan.fulfilled, (state, action) => {
        state.items = state.items.filter((p) => p._id !== action.payload);
      });
  },
});

export default planSlice.reducer;
