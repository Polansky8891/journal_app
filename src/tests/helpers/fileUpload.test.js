import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({
        cloud_name: 'dndspqgrl',
        api_key: '911237927128432',
        api_secret: 'YlwV47o-KXIcvd5LUHT37esxnfo',
        secure: true

});




describe('Pruebas en fileUpload', () => { 

    test('debe de subir el archivo correctamente a cloudinary', async() => {

            const imageUrl = 'https://media.istockphoto.com/id/583809524/es/foto/desierto-de-alberta-cerca-de-banff.jpg?s=612x612&w=0&k=20&c=mvDownbgLZRz1Wci6yV68NRRngqWNrl_lRF6QtrdJkw=';
            const resp = await fetch( imageUrl );
            const blob = await resp.blob();
            const file = new File([blob], 'foto.jpg');

            const url = await fileUpload( file );
            expect( typeof url).toBe('string');

    });

    test('debe de retornar null', async() => {

            const file = new File([], 'foto.jpg');

            const url = await fileUpload( file );
            expect( url ).toBe(null);
    })


 });