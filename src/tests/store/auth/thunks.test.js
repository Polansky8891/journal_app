import { loginWithEmailPassword, logoutFirebase, signInWithGoogle } from "../../../firebase/providers";
import { checkingCredentials } from "../../../store/auth/authSlice";
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword, startLogout } from "../../../store/auth/thunks";
import { demoUser } from "../../fixtures/authFixtures";
import { login, logout } from "../../../store/auth/authSlice";
import { clearNotesLogout } from "../../../store/journal/journalSlice";
 

jest.mock('../../../firebase/providers');


describe('pruebas en authThunks', () => { 

    const dispatch = jest.fn();

    beforeEach( () => jest.clearAllMocks() );


    test('debe de invocar el checkingCredentials', async() => {
       await checkingAuthentication()( dispatch );
       expect( dispatch ).toHaveBeenCalledWith(checkingCredentials() );
    });

    test('startGoogleSignIn debe de llamar checkingCredentials y login ', async() => { 

        const loginData = { ok: true, ...demoUser };
        await signInWithGoogle.mockResolvedValue( loginData );

        await startGoogleSignIn()( dispatch );

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( login( loginData ) );


     });

     test('startGoogleSignIn debe de llamar checkingCredentials y logout - Error ', async() => { 

        const loginData = { ok: false, errorMessage: 'un error en Google' };
        await signInWithGoogle.mockResolvedValue( loginData );

        await startGoogleSignIn()( dispatch );

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( logout( loginData.errorMessage ));

     });

     test('startLoginWithEmailPassword debe de llamar checkingCredentials y login', async () => { 

        const loginData = { ok: true, ...demoUser };
        const formData = { email: demoUser.email, password: '123456' };

        await loginWithEmailPassword.mockResolvedValue( loginData );
        await startLoginWithEmailPassword(formData)(dispatch);

        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( login( loginData) );


      });

      test('startLogout debe de llamar logoutFirebase, clearNotes y logout', async () => { 

        await startLogout()(dispatch);

        expect( logoutFirebase).toHaveBeenCalled();
        expect( dispatch ).toHaveBeenCalledWith( clearNotesLogout() );
        expect( dispatch ).toHaveBeenCalledWith( logout() );


       })


 })