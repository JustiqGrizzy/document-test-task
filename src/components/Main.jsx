import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDocumentsStart, getDocumentsSucces } from "../slice/document";
import DocumentService from "../service/document";
import { Link, useNavigate } from "react-router-dom";

const Main = () => {
  const { documents } = useSelector((state) => state.document);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getDocuments = async () => {
    dispatch(getDocumentsStart());
    try {
      const response = await DocumentService.getDocuments();
      dispatch(getDocumentsSucces(response));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDocuments();
  }, []);

  return (
    <div>
      <button
        className="btn btn-primary mb-3"
        onClick={() => navigate("/add-document")}
      >
        New document form
      </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Document name</th>
            <th>Creation Date</th>
            <th>Document Size</th>
            <th>Preview</th>
          </tr>
        </thead>
        <tbody>
          {/* {documents.map((item) => (
            <tr id={item.id}>
              <th>{item.id}</th>
              <th>{item.document_name}</th>
              <th>{item.created_at}</th>
              <th>{item.field_count}</th>
              <th><Link to={`/document-preview/${id}`}>Document preview</Link></th>
            </tr>
          ))} */}
          <tr>
            <th>1</th>
            <th>Document 1</th>
            <th>08.07.2002</th>
            <th>3</th>
            <th>
              <Link to={`/document-preview/1`}>Document preview</Link>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Main;
