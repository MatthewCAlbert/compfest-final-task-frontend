# Compfest Final Task Frontend - PENTA Team

## Made Using
- React 17
- React Redux-Redux Saga
- ESLint
- EmotionJs
- Axios
- Bootstrap 5
- React Slick
- React Hot Toast
- React Hook Form
- SWR
- JS Cookie

## TODO
- [x] Auth
- [x] Edit Profile
- [ ] Change Password
- [x] Public Program List
- [x] Public Program Detail
- [x] Public Program Donate
- [x] Top Up
- [x] Wallet History
- [x] Donation History
- [ ] Inbox (tolong diisi)
- [ ] Fundraiser: Create New Program
- [ ] Fundraiser: My Program List 
- [ ] Fundraiser: My Program Detail 
- [ ] Fundraiser: My Program Withdraw 
- [x] Admin: Pending User (left: testing)
- [x] Admin: Pending Program (left: testing)
- [x] Admin: Pending Withdrawal (left: testing)
- [x] Admin: Verify User (left: testing)
- [x] Admin: Verify Program (left: testing)
- [x] Admin: Verify Withdrawal (left: testing)

## Docker Info
- Build on NodeJs v12 Alpine
- Running on Nginx Latest Alpine

## Deployment using Docker
```bash
docker build . /dir/to/project -t tagname
docker run -d -p HOST_PORT:80 tagname
```