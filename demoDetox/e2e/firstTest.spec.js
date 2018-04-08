describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  
  it('should have welcome screen', async () => {
    await element(by.id('MyUniqueId123')).tap();
    await expect(element(by.id('AnotherUniqueId456'))).toBeVisible();
  });
})