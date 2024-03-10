

import { createSlice } from '@reduxjs/toolkit';

export const tabsSlice = createSlice({
  name: 'tabs',
  initialState: {
    tabs: [
      
        { index: 0, content: 'Football' },
        { index: 1, content: 'Tennis' },
        { index: 2, content: 'Cricket' },
        { index: 3, content: 'Esoccer' },
        { index: 4, content: 'Horse Racing' },
        { index: 5, content: 'Table Tennis' },
        { index: 6, content: 'Greyhound Racing' },
        { index: 7, content: 'Basketball' },
        { index: 8, content: 'Volleyball' },
        { index: 9, content: 'Kabaddi' },
        { index: 10, content: 'Badminton' },
        { index: 11, content: 'American Football' },
        { index: 12, content: 'Futsal' },
        { index: 13, content: 'E Games' },
        { index: 14, content: 'Snooker' },
      ],
      activeTab: 0,
      
  },
  reducers: {
    setActiveTab: (state, action) => {
      
      state.activeTab = action.payload;
    },
  },
});

export const { setActiveTab } = tabsSlice.actions;

export const selectActiveTab = (state) => state.tabs.activeTab;
export const selectActiveTabContent = (state) => {
  const activeTabIndex = state.tabs.activeTab;
  return state.tabs.tabs[activeTabIndex].content;
};
export default tabsSlice.reducer;