const http = require('http');
const fs = require('fs').promises
const url = require('url');
const qs = require('querystring')

const parseCookie = (cookie = '') => 
    cookie
        .split(';')
        .map(v=> v.split('='))
        .reduce((acc, [k, v]) => {
            acc[k.trim()]
        })