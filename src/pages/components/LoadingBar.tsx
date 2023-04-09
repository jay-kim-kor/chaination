const LoadingBar = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
        <div style={{ width: '200px', height: '11px', borderRadius: '5px', backgroundColor: '#eee' }}>
          <div style={{ 
            width: '20%', 
            height: '100%', 
            borderRadius: '5px',
            backgroundColor: '#000',
            animation: 'loading-bar 1s ease-in-out infinite',
          }} />
        </div>
      </div>
    );
  };
  
  export default LoadingBar;