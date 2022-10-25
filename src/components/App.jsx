export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        fontSize: 70,
        color: '#f1ebeb',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/background.png'})`
      }}
    >
      SELECT YOUR FIGHTER
    </div>
  );
};
