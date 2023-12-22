const Avater = ({ size }) => {
    return (
      <div className="avatar">
        <div className={`w-24 rounded-full  ${size ? size : "w-12"}`}>
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
    );
  };
  
  export default Avater;