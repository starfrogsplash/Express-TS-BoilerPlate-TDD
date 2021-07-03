import request from "supertest";
import {app}from '../src/app'

it('checks default endpoint', async()=> {
    const res = await request(app).get('/')
    expect(res.body).toEqual('success')
})

it('returns id', async()=> {
    const res = await request(app).get('/abc1')
    expect(res.body).toEqual('id is abc1')
})