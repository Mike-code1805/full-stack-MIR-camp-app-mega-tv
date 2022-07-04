import supertest from 'supertest';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import app from '../../app';

describe('Users', () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
  });
  const fakeUser = {
    __v: 0,
    _id: expect.any(String),
    created_at: expect.any(String),
    updated_at: expect.any(String),
    name: "name",
    lastname: "lastname",
    address: "",
    nroApart: "",
    plan: "",
    email: "",
    phone: ""
  };



  describe('POST', () => {
    it('should return status 400 with invalid lastname', async () => {
      const { body } = await supertest(app)
        .post('/api/users')
        .expect(400);
      expect(body).toEqual({ message: 'Lastname is required' });
    });

    it('should return status 400 with lastname is required', async () => {
      const { body, statusCode } = await supertest(app)
        .post('/api/users')
        .send({ name: 'name' })
        .expect(400);
      expect(body).toEqual({ message: 'Lastname is required' });
      expect(statusCode).toEqual(400);
    });

    it('should return status 400 with name is required', async () => {
      const { body } = await supertest(app)
        .post('/api/users')
        .send({ lastname: 'lastname' })
        .expect(400);
      expect(body).toEqual({ message: 'Name is required' });
    });

    it('should return status 201 when a user is created ', async () => {
      const { body } = await supertest(app)
        .post('/api/users')
        .send({ name: 'name', lastname: 'lastname' })
        .expect(201);
      expect(body).toEqual(fakeUser);
    });
  });

  describe('GET', () => {
    it('should return a 200 ', async () => {
      const { body, statusCode } = await supertest(app)
        .get(`/api/users`)
        .expect(200);
      expect(body).toEqual([fakeUser]);
      expect(statusCode).toEqual(200);
    });
  });

  describe('PUT', () => {
    it('should return a 400 if id does not exist and missing characters', async () => {
      const id = '62c3344ff84ab1003ab0afa'
      const { body, statusCode } = await supertest(app)
        .put(`/api/users/find/${id}`)
      expect(body).toEqual({ message: 'Error updating the user' });
      expect(statusCode).toEqual(400);
    });

    it('should return a 400 if id is incorrect', async () => {
      const id = '62c3344ff84ab1003ab0afa8'
      const { body, statusCode } = await supertest(app)
        .put(`/api/users/find/${id}`)
        .expect(400);
      expect(body).toEqual({ message: 'User does not exist' });
      expect(statusCode).toEqual(400);
    });

    it('should return a 200 if user is updated', async () => {
      const bodyMock = await supertest(app)
        .post('/api/users')
        .send({ name: 'name', lastname: 'lastname' });
      const { body, statusCode } = await supertest(app)
        .put(`/api/users/find/${bodyMock.body._id}`)
        .expect(200);
      expect(body).toEqual({ message: 'updated' });
      expect(statusCode).toEqual(200);
    });
  });

  describe('DELETE', () => {
    it('should return a 400 if id does not exist and missing characters', async () => {
      const id = '62c3344ff84ab1003ab0afa'
      const { body, statusCode } = await supertest(app)
        .delete(`/api/users/find/${id}`)
      expect(body).toEqual({ message: 'Error deleting the user' });
      expect(statusCode).toEqual(400);
    });

    it('should return a 400 if id is incorrect', async () => {
      const id = '62c3344ff84ab1003ab0afa8'
      const { body, statusCode } = await supertest(app)
        .delete(`/api/users/find/${id}`)
        .expect(400);
      expect(body).toEqual({ message: 'User does not exist' });
      expect(statusCode).toEqual(400);
    });

    it('should return a 200 if user is deleted', async () => {
      const bodyMock = await supertest(app)
        .post('/api/users')
        .send({ name: 'name', lastname: 'lastname' });
      const { body, statusCode } = await supertest(app)
        .delete(`/api/users/find/${bodyMock.body._id}`)
        .expect(200);
      expect(body).toEqual({ message: 'deleted' });
      expect(statusCode).toEqual(200);
    });
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });

});

