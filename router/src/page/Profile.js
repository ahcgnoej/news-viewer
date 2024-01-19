import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const data = {
  velopert: {
    name: '김민준',
    description: '리액트를 좋아하는 개발자',
  },
  gildong: {
    name: '홍길동',
    description: '고전 소설 홍길동전의 주인공',
  },
};

const Profile = () => {
  let navigate = useNavigate();
  const { username } = useParams();
  const profile = data[username];

  if (!profile) {
    return <div>존재하지 않는 사용자</div>;
  }

  return (
    <div>
      <hr></hr>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
<hr></hr>
      <div>
        {/* Home으로 이동하는 버튼 */}
        <button onClick={() => navigate('/')}>Home으로 이동하기</button>
      </div>
    </div>
  );
};

export default Profile;
