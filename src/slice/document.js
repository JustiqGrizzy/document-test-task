import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  documents: [],
  documentPreview: [],
  error: null,
};

export const documentSlice = createSlice({
  name: "document",
  initialState,
  reducers: {
    getDocumentsStart: (state) => {
      state.isLoading = true;
    },
    getDocumentsSucces: (state, action) => {
      state.isLoading = false;
      state.documents = action.payload;
    },
    getDocumentsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    getDocumentPreviewStart: (state) => {
      state.isLoading = true;
    },
    getDocumentPreviewSucces: (state, action) => {
      state.isLoading = false;
      state.documentPreview = action.payload;
    },
    getDocumentPreviewFailure: (state) => {
      state.isLoading = false;
      state.error = "error in Getting Document preview";
    },
    postDocumentStart: (state) => {
      state.isLoading = true;
    },
    postDocumenteSuccess: (state) => {
      state.isLoading = false;
    },
    postDocumentFailure: (state) => {
      state.isLoading = false;
      state.error = "Error in posting document";
    },
  },
});

export const {
  getDocumentsStart,
  getDocumentsSucces,
  getDocumentsFailure,
  getDocumentPreviewStart,
  getDocumentPreviewSucces,
  getDocumentPreviewFailure,
  postDocumentStart,
  postDocumentSucces,
  postDocumentFailure,
} = documentSlice.actions;

export default documentSlice.reducer;
