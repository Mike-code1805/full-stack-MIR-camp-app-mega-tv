export const mockData = [
  {
    __v: 0,
    _id: "62110223136fa11f53eace83",
    created_at: expect.any(String),
    updated_at: expect.any(String),
    name: "name",
    lastname: "lastname",
    address: "",
    nroApart: "",
    plan: "",
    email: "",
    phone: ""
  },
  {
    __v: 0,
    _id: "62110223136fa11f93eace83",
    created_at: expect.any(String),
    updated_at: expect.any(String),
    name: "name",
    lastname: "lastname",
    address: "",
    nroApart: "",
    plan: "",
    email: "",
    phone: ""
  }
];

export const mockRequest: any = {
  body: {
    lastname: "lastname"
  },
};

export const mockResponse: any = {
  __v: 0,
  _id: expect.any(String),
  created_at: expect.any(String),
  updated_at: expect.any(String),
  name: "name",
  lastname: "lastname",
  address: "",
  nroApart: "",
  plan: "",
  email: "",
  phone: ""
};