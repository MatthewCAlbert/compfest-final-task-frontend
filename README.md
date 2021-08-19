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
- [x] Change Password (left: api)
- [x] Search (left: api fix)
- [x] Public Program List (left: api fix)
- [x] Public Program Detail (left: api fix)
- [x] Public Program Donate
- [x] Top Up
- [x] Wallet History
- [x] Donation History
- [ ] Inbox (tolong diisi)
- [x] Fundraiser: Create New Program
- [x] Fundraiser: My Program List 
- [x] Fundraiser: My Program Detail (left: testing)
- [x] Fundraiser: My Program Withdraw (left: testing)
- [x] Admin: Pending Fundraiser
- [x] Admin: Pending Program (left: testing)
- [x] Admin: Pending Withdrawal (left: testing)
- [x] Admin: Verify Fundraiser
- [x] Admin: Verify Program (left: testing)
- [x] Admin: Verify Withdrawal (left: testing)

## Notice
- Expired Token Not Handled Yet.
- Donation Programs not available yet to public.
- Main Carousel not filled yet.

## Docker Info
- Build on NodeJs v12 Alpine
- Running on Nginx Latest Alpine

## Deployment using Docker
```bash
docker build . /dir/to/project -t tagname
docker run -d -p HOST_PORT:80 tagname
```