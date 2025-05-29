import { authSlice, checkingCredentials, logout } from "../../../store/auth/authSlice"
import { authenticatedState, initialState } from "../../fixtures/authFixtures";
import { login } from "../../../store/auth/authSlice";
import { demoUser } from "../../fixtures/authFixtures";


describe('Pruebas en el authSlice', () => { 
    
    test('debe de regresar el estado inicial y llamarse "auth" ', () => { 
        
       
        const state = authSlice.reducer( initialState, {});

        expect( state ).toEqual( initialState );
        expect( authSlice.name ).toBe('auth');


     });

     test('debe de realizar la autenticación ', () => { 
        
        const state = authSlice.reducer( initialState, login( demoUser ) );
        expect( state ).toEqual({
            status: 'authenticated', // 'checking', 'not-authenticated', 'authenticated'
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            photoURL: demoUser.photoURL,
            errorMessage: null,
        });

      });

      test('debe de realizar el logout sin argumentos', () => { 

        const state = authSlice.reducer( authenticatedState, logout() );
        expect( state ).toEqual({
            status: 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined,
        });


       });

      test('debe de realizar el logout y mostrar un mensaje de error', () => { 

        const errorMessage = 'Las credencials no son correctas';

         const state = authSlice.reducer( authenticatedState, logout({ errorMessage }) );
         console.log(state);
         expect( state ).toEqual({
            status: 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: errorMessage,
        });

       });

       test('debe de cambiar el estado a cehcking', () => { 

            const state = authSlice.reducer( authenticatedState, checkingCredentials() );
            expect( state.status ).toBe('checking');

        });

 })