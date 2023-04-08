const Header = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#FFCCFF',
        color: 'white',
        padding: '20px',
      }}
    >
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', cursor: 'pointer' }}>
        로고
      </h1>

      <div>
        <a
          style={{ marginRight: '20px', cursor: 'pointer' }}
        >
          기부하기
        </a>
        <a
          style={{ marginRight: '20px', cursor: 'pointer' }}
        >
          내 정보
        </a>
        <a style={{ cursor: 'pointer' }}>
          검색
        </a>
      </div>
    </div>
  );
};

export default Header;