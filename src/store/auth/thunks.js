import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { loadNotes } from "../../helpers/loadNotes";
import { setNotes } from "../journal/journalSlice";
import { checkingCredentials, logout, login } from "./authSlice"

export const checkingAuthentication = () => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );
        
    }
}


export const startGoogleSignIn = () => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const result = await signInWithGoogle();
        if ( !result.ok ) return dispatch( logout( result.errorMessage ) );

        dispatch( login( result ))

    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );
        const result = await registerUserWithEmailPassword({ email, password, displayName });

        if (!ok) return dispatch( logout(result.errorMessage));

        dispatch( login({ uid, displayName, email, photoURL }));
    }
}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async( dispatch ) => {

        dispatch( checkingCredentials() );

        const result = await loginWithEmailPassword({ email, password });
        console.log(result);

        if ( !result.ok ) return dispatch( logout( result ) );
        dispatch( login( result ));

    }
}

export const startLogout = () => {
    return async( dispatch ) => {

        await logoutFirebase();

        dispatch( logout() );
    }
}

export const startLoadingNotes = () => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;

        const notes = await loadNotes( uid );
        dispatch( setNotes( notes ));
    }

}

export const startSaveNote = () => {
    return async( dispatch, getState ) =>{

        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const noteToFireStore = { ...note }
        delete noteToFireStore.id;

    }
}
