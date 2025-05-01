
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{blue.50}',
            100: '{blue.100}',
            200: '{blue.200}',
            300: '{blue.300}',
            400: '{blue.400}',
            500: '{blue.500}',
            600: '{blue.600}',
            700: '{blue.700}',
            800: '{blue.800}',
            900: '{blue.900}',
            950: '{blue.950}'
        },
        colorScheme: {
            light: {
                surface: {
                    0: '#ffffff',
                    50: '{ocean.50}',
                    100: '{ocean.100}',
                    200: '{ocean.200}',
                    300: '{ocean.300}',
                    400: '{ocean.400}',
                    500: '{ocean.500}',
                    600: '{ocean.600}',
                    700: '{ocean.700}',
                    800: '{ocean.800}',
                    900: '{ocean.900}',
                    950: '{ocean.950}'
                }
            },

        }
    }
});

export default {
    preset: MyPreset,
};

