'use client';
import auth from "@/firebase/irebase.config";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";
import {useCreateUserByExpressMutation} from "@/features/auth/authApi";

const initialState = {
  email: '',
  name: '',
  role: 'user',
  id: '',
  address: '',
  phone: '',
  isLoading: false,
  isError: false,
  error: ''
};

export const createUser = createAsyncThunk(
    'auth/createUser',
    async ({ email, password, address,phone }) => {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      // refresh the page
      // window.location.reload();
      let data ={
        email:email,
        address:address,
        phone:phone,
        role:'user'
      }
      return data;
    },
);

export const deleteUserByFirebase = createAsyncThunk(
    'auth/deleteUserByFirebase',
    async (email) => {
        //delete user from firebase
        const auth = getAuth();
        const user = await auth.currentUser;
        console.log("user", user)
        // deleteUser(user).then(() => {
        //   console.log("user deleted");
        // }).catch((error) => {
        //   console.log("error", error);
        // });
        // return user;
      
    }
);



export const createUserByExpressMutation = createAsyncThunk(
    'auth/createUserByExpress',
    async (user, thunkAPI) => {
      try {
        //post user to express
        console.log("user", user)
        let newUser ={
          email:user.email,
          address:user.address,
          role:'user',
          phone:user.phone
        }
        const response = await fetch('https://deshifood-zbcn-4y9hx34p8-hadidbilla.vercel.app/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        });
        await thunkAPI.dispatch(createUser({ email: user.email, password: user.password, phone: user.phone, address:user.address }));
        return response.data;
      } catch (error) {
        throw new Error(error.response.data);
      }
    }
);

export const getUserByEmail = createAsyncThunk(
  'auth/getUserByEmail',
  async (email, _thunkAPI) => {
    try {
      //get user from express
      const response = await fetch(`https://deshifood-zbcn-4y9hx34p8-hadidbilla.vercel.app/api/users/email/${email}`);
      let user = await response.json();
      return user;
    } catch (error) {
      throw new Error(error.response.data);
    }
  }
);


export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({email, password}, _thunkAPI) => {
    const data = await signInWithEmailAndPassword(auth, email, password);
    console.log(data);
    return data;
  }

);

export const googleSignIn = createAsyncThunk(
  'auth/googleSignIn',
  async () => {
    const provider = new GoogleAuthProvider();
    const data = signInWithPopup(auth, provider);
    return data;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: (state, _action) => {
      state.email = '';
      state.role = '';
    },
    toggleLoading: (state, _action) => {
      state.isLoading = !state.isLoading;
      state.isError = false;
      state.error = '';
    },
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.isLoading = false;
      state.isError = false;
      state.error = '';
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
      state.error = '';
    })
      .addCase(createUser.fulfilled, (state, action) => {
        state.email = action.payload.user.email;
        state.isLoading = false;
        state.isError = false;
        state.error = '';
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload?.message;
      })
      .addCase(loginUser.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.error = '';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.email = action.payload.user.email;
        state.isLoading = false;
        state.isError = false;
        state.error = '';
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload?.message ? action.payload.message : 'Login failed';
      })
      .addCase(googleSignIn.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.error = '';
      })
      .addCase(googleSignIn.fulfilled, (state, action) => {
        state.email = action.payload.user.email;
        state.isLoading = false;
        state.isError = false;
        state.error = '';
      })
      .addCase(googleSignIn.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload.message;
      })
      .addCase(getUserByEmail.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.error = '';
      }
    )
    .addCase(getUserByEmail.fulfilled, (state, action) => {
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.id = action.payload._id;
      state.address = action.payload.address;
      state.phone = action.payload?.phone;
      state.name = action.payload?.name ? action.payload.name : '';
      state.isLoading = false;
      state.isError = false;
      state.error = '';
    }
    )
    .addCase(getUserByEmail.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload?.message;
    }
    )
    .addCase(createUserByExpressMutation.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
      state.error = '';
    }
    )
    .addCase(createUserByExpressMutation.fulfilled, (state, action) => {
      state.email = action.payload?.email;
      state.role = action.payload.role;
      state.id = action.payload._id;
      state.address = action.payload.address;
      state.phone = action.payload?.phone;
      state.name = action.payload?.name ? action.payload.name : '';
      state.isLoading = false;
      state.isError = false;
      state.error = '';
    }
    )
    .addCase(createUserByExpressMutation.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload?.message;
    }
    )
  }
});
export const {logOut, toggleLoading, setUser} = authSlice.actions;
export default authSlice.reducer;