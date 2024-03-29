// https://github.com/nuxt/nuxt.js/issues/4115
import Vue from 'vue';
import { config } from '@vue/test-utils';

Vue.config.silent = true;

// Mock Nuxt components
config.stubs['nuxt-link'] = true; // string stabs like '<a><slot /></a>' are now depreciated
config.stubs['no-ssr'] = true;
config.stubs['UnoIcon'] = true;
config.mocks.$t = (i) => i;
config.mocks.localePath = (i) => i;
