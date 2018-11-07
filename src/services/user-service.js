import User from '../models/user';

export default class UserService {
    constructor() {

        // an in-memory 'database'
        this.users = [
            new User({ id: 1, ip: '43.217.98.114', city: 'Austin', industry: 'Software', companySize: '0-50' }),
            new User({ id: 2, ip: '101.247.100.229', city: 'San Francisco', industry: 'Software', companySize: '100-200'}),
            new User({ id: 3, ip: '201.112.124.140', city: 'Denver', industry:'Sports', companySize: '0-50'}),
            new User({ id: 4, ip: '253.231.118.198', city: 'Dallas', industry: 'Sports', companySize: '100-200'}),
            new User({ id: 5, ip: '160.170.200.182', city: 'New York', industry: 'Marketing', companySize: '100-200'}),
            new User({ id: 6, ip: '129.88.147.200', city: 'San Francisco', industry: 'Retail', companySize: '0-50'}),
            new User({ id: 7, ip: '154.85.159.174', city: 'Austin', industry: 'Oil and Gas', companySize: '1000+'}),
            new User({ id: 8, ip: '179.180.127.155', city: 'Dallas', industry: 'Software', companySize: '100-200'}),
            new User({ id: 9, ip: '201.111.240.66', city: 'San Antonio', industry: 'Tourism', companySize: '0-50'}),
            new User({ id: 10, ip: '79.210.84.134', city: 'New York', industry: 'Sports', companySize: '201-499'})
        ]
    }

    /**
     * A very insecure login function
     * @param {number} id corresponding to user.id
     * @return User or undefined.
     */
    login(id) {
        return this.users.find(user => user.id === id);
    }

}


