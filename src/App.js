import React from "react";
import { Main, DocumentPreview, AddForm, CreateDocument } from "./components";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="container-lg ">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/document-preview/:id" element={<DocumentPreview />} />
        <Route path="/add-document" element={<CreateDocument />} />
      </Routes>
    </div>
  );
};

export default App;
