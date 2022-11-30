const request = require('supertest');
const axios = require('axios');

const { createApp } = require('../app');
const { appDataSource } = require('../src/models/dataSource');
const userService = require('../src/services/userService');

jest.mock('../src/services/userService');
const getAccessToken = jest.fn();
const getKakaoUserData = jest.fn();

describe('loginTest', () => {
  let app;

  beforeAll(async () => {
    app = createApp();
    await appDataSource.initialize();
  });

  afterAll(async () => {
    await appDataSource.destroy();
  });

  test('SUCCESS: kakaoLogin', async () => {
    const code =
      'euCGiJLpHahupGC_SxrXq5uCMKi-2wRl6XvGb7dfGPHA_kOgU4tAPWY08FupdLVOrl6D6worDSAAAAGE3Gjpzg';

    getAccessToken.mockResolvedValue({
      kakaoAccessToken: 'kakaoTestToken',
    });

    getKakaoUserData.mockResolvedValue({
      kakaoUserData: {
        id: 1234,
      },
    });

    await request(app)
      .get('/users/kakaoLogin')
      .query({ code: code })
      .expect(200)
      .expect({
        userData: {
          accessToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzAxNDUyMjQsImV4cCI6MTY3MjczNzIyNCwic3ViIjoiYWNjZXNzVG9rZW4ifQ.Dm_S5iW7uSsLxGMhzBzm76UYC5u-LU5x4fBXlqzGRKo',
          isMember: false,
        },
      });
  });

  test('ERROR: no code', async () => {
    await request(app).get('/users/kakaoLogin').expect(400), 'CODE_REQUIRED';
  });
});
