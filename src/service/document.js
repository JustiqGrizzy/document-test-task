import axios from "./api";

const DocumentService = {
  async getDocuments() {
    const data = await axios.get(" /api/v1/documents");
    return data;
  },
  async getDocumentPreview(id) {
    const { data } = await axios.get(`/api/v1/document/${id}`);
    return data;
  },
  async postDocument(document) {
    const { data } = await axios.post(`/api/v1/documents/create`, { document });
    return data;
  },
};
export default DocumentService;
