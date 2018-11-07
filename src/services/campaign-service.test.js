import assert from 'assert';
import CampaignService from './campaign-service';
import UserService from './user-service';

it('returns the proper photos', () => {
  // set up test dependencies
  const campaignService = new CampaignService();
  const userService = new UserService();

  // get all the users that we will need
  const user1 = userService.login(1);
  const user2 = userService.login(2);
  const user3 = userService.login(3);
  const user4 = userService.login(4);
  const user5 = userService.login(5);
  const user6 = userService.login(6);
  const user7 = userService.login(7);
  const user8 = userService.login(8);
  const user9 = userService.login(9);
  const user10 = userService.login(10);

  assert.equal(campaignService.serve(user1), 'Austin.jpg');
  assert.equal(campaignService.serve(user2), 'SanFrancisco.jpg');
  assert.equal(campaignService.serve(user3), 'Sports.jpg');
  assert.equal(campaignService.serve(user4), 'Sports.jpg');
  assert.equal(campaignService.serve(user5), 'smb.jpg');
  assert.equal(campaignService.serve(user6), 'SanFrancisco.jpg');
  assert.equal(campaignService.serve(user7), 'Austin.jpg');
  assert.equal(campaignService.serve(user8), 'Software.jpg');
  assert.equal(campaignService.serve(user9), 'proof.png');
  assert.equal(campaignService.serve(user10), 'Sports.jpg');

});
