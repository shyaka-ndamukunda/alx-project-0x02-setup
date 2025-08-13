import React from 'react';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { type UserProps } from '@/interfaces';
import { GetStaticProps } from 'next';

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div>
      <Header
        title="Users"
        description="A list of all users fetched from a public API."
      />
      <div className="min-h-screen flex flex-col items-center">
        <h1 className="text-4xl font-bold mt-8">All Users</h1>
        <div className="mt-8 flex flex-wrap justify-center">
          {users.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: UserProps[] = await response.json();

  return {
    props: {
      users,
    },
  };
};

export default UsersPage;
