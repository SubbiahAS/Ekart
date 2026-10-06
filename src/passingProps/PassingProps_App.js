import './App.css';

import Avatar from "./components/avatar";

function Profile() {
  return (
    <div>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'https://i.imgur.com/YfeOqp2.jpg'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'https://i.imgur.com/OKS67lh.jpg'
        }}
      />
      <Avatar
        size={60}
        person={{
          name: 'Solomon', 
          imageId: 'https://i.imgur.com/8j545.jpg'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: 'https://i.imgur.com/1bX5QH6.jpg'
        }}x
      />
    </div>
  );
}

export default Profile;

