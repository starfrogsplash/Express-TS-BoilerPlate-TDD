import request from "supertest";

import {app}from '../app'

it('checks endpoint', async()=> {
    const res = await request(app).get('/')
    expect(res.body).toEqual('we have a success')
})