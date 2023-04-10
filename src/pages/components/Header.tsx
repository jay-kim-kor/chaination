const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "Black",
        color: "white",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "24px", fontWeight: "bold", cursor: "pointer" }}>
        Chaination
      </h1>

      <div>
        <a
          style={{
            color: "white",
            marginRight: "20px",
            cursor: "pointer",
            textDecoration: "none",
            borderBottom: "1px solid white",
          }}
        >
          기부하기
        </a>
        <a
          style={{
            marginRight: "20px",
            cursor: "pointer",
            textDecoration: "none",
            borderBottom: "1px solid white",
          }}
        >
          내 정보
        </a>
        <a
          style={{
            marginRight: "20px",
            cursor: "pointer",
            textDecoration: "none",
            borderBottom: "1px solid white",
          }}
        >
          로그인
        </a>
        <a
          style={{
            cursor: "pointer",
            textDecoration: "none",
            borderBottom: "1px solid white",
          }}
        >
          검색
        </a>
      </div>
    </div>
  );
};

export default Header;
