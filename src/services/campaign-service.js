import Campaign from '../models/campaign';
const DEFAULT_PRIORITY = [1,2,3,4,5,6,7];

export default class CampaignService {

    /**
     *
     * @param {array} priority Array of integers corresponding to the Campaign IDs that should be served in priority order.
     */
    constructor(priority) {
        this.priority = priority || DEFAULT_PRIORITY;

        this.campaigns = [
            new Campaign({ id: 1, photo: 'Austin.jpg', matches: user => user.city === 'Austin' }),
            new Campaign({ id: 2, photo: 'SanFrancisco.jpg', matches: user => user.city === 'San Francisco' }),
            new Campaign({ id: 3, photo: 'Software.jpg', matches: user => user.industry === 'Software' }),
            new Campaign({ id: 4, photo: 'Sports.jpg', matches: user => user.industry === 'Sports' }),
            new Campaign({ id: 5, photo: 'proof.png', matches: user => user.companySize === '0-50' }),
            new Campaign({ id: 6, photo: 'smb.jpg', matches: user => user.companySize === '100-200' }),
            new Campaign({ id: 7, photo: 'shrug.jpg', matches: () => true }),
        ]
    }

    /**
     *
     * @param {User} user the User that needs a campaign.
     * @return {string} photo name
     */
    serve(user) {
        for(let i = 0; i < this.priority.length; i++) {
            const campaign = this.campaigns.find(campaign => campaign.id === this.priority[i]);

            if (!campaign) {
                throw new Error('campaigns not configured properly');
            }

            if (campaign.matches(user)) {
                return campaign.photo;
            }
        }
        throw new Error('no campaign matched user');
    }
}
