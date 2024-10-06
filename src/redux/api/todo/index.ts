import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getTodos: build.query<TODO.GetTodosResponse, TODO.GetTodosRequest>({
      query: () => ({
        url: "",
        method: "GET",
      }),
      providesTags: ["todo"],
    }),

    postTodos: build.mutation<TODO.PostTodosResponse, TODO.PostTodosRequest>({
      query: (data) => ({
        url: "",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
    deleteTodos: build.mutation<
      TODO.DeleteTodosResponse,
      TODO.DeleteTodosRequest
    >({
      query: (_id) => ({
        url: `/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["todo"],
    }),

    patchTodos: build.mutation<TODO.PatchTodosResponse, TODO.PatchTodosRequest>(
      {
        query: ({ _id, newDate }) => ({
          url: `/${_id}`,
          method: "PATCH",
          body: newDate,
        }),
        invalidatesTags: ["todo"],
      }
    ),
  }),
});

export const {
  useGetTodosQuery,
  usePostTodosMutation,
  useDeleteTodosMutation,
  usePatchTodosMutation,
} = api;
