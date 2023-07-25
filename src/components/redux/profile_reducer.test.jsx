import profileReducer from "./profile_reducer";
import { deletePost } from "./profile_reducer";

let state = {
    postData: [
      { id: 1, message: "Hey, how are your?", likesCount: "34" },
      { id: 2, message: "It is my first posts", likesCount: "56" },
      { id: 2, message: "lalalal", likesCount: "12" },
      { id: 2, message: "wowoowwowowo", likesCount: "21" },
    ],
  };

it("message of new post shounld be incremented it-incubator.com", () => {
  let action = addPostActionCreator("it-incubator.com ");
  let newState = profileReducer(state , action);
  expect(newState.posts.length).toBe(5)
});


it("length of post shounld be incremented", () => {
  let action = addPostActionCreator("it-incubator.com ");
  let newState = profileReducer(state, action);
  expect(newState.posts[4].message).toBe("it-incubator.com");
});

it("after deleting length of message should be decriment", () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(3);
});


it("after deleting shouldn`t be dicrement if id is incorrect ", () => {
    let action = deletePost(1000 );
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4);
  });