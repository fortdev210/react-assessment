import { Suspense, useState, useEffect } from 'react';
import Spinner from './spinner'
const SuspensefulUserProfile = ({ userId }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetchUserProfile(userId).then((profile) => setData(profile));
  }, [userId])
  return (
    <Suspense fallback={<Spinner />}>
      <UserProfile data={data} />
    </Suspense>
  );
};
const UserProfile = ({ data }) => {
  return (
    <>
      <h1>{data.name}</h1>
      <h2>{data.email}</h2>
    </>
  );
};
const UserProfileList = () => (
  return (<>
    <SuspensefulUserProfile userId={1} />
    <SuspensefulUserProfile userId={2} />
    <SuspensefulUserProfile userId={3} />
  </>)
);
