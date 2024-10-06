namespace TODO {
  type GetTodosResponse = {
    _id?: number;
    title: string;
    price: string;
    url: string;
  }[];
  type GetTodosRequest = void;
  type PostTodosResponse = {
    _id?: number;
    title: string;
    price: string;
    url: string;
  }[];
  type PostTodosRequest = {
    _id?: number;
    title: string;
    price: string;
    url: string;
  };
  type DeleteTodosResponse = {
    _id?: number;
  }[];
  type DeleteTodosRequest = number;

  type PatchTodosResponse = {
    _id?: number;
  }[];
  type PatchTodosRequest = {
    _id: number;
    newDate: {
      title: string;
      price: string;
      url: string;
    };
  };
}
