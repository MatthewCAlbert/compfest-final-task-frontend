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
- [x] Edit Profile (left: change password)
- [x] Public Program List
- [x] Public Program Detail
- [x] Public Program Donate
- [x] Top Up
- [x] Wallet History
- [x] Donation History
- [ ] Fundraiser: Create New Program
- [ ] Fundraiser: My Program List 
- [ ] Fundraiser: My Program Detail 
- [ ] Fundraiser: My Program Withdraw 
- [ ] Admin: Pending User 
- [ ] Admin: Pending Program 
- [ ] Admin: Pending Withdrawal 
- [ ] Admin: Verify User 
- [ ] Admin: Verify Program 
- [ ] Admin: Verify Withdrawal 

## Docker Info
- Build on NodeJs v12 Alpine
- Running on Nginx Latest Alpine

## Deployment using Docker
```bash
docker build . /dir/to/project -t tagname
docker run -d -p HOST_PORT:80 tagname
```