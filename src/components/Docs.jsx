import React, { useState } from 'react'

export default function Docs(){
  const handleUpClick=(event)=>{
    event.preventDefault();
    const newtext=text.toUpperCase();
    settext(newtext);
  }
  const handleLoClick=(event)=>{
    event.preventDefault();
    const newtext=text.toLowerCase();
    settext(newtext);
  }
  const countfunc=(e)=>{
    e.preventDefault();
    setshow(true);
  }
  const handledelete=(e)=>{
    e.preventDefault();
    settext("");
  }
  const crossfunc=(e)=>{
    e.preventDefault();
    setshow(false);
  }
  const handleOnChange=(event)=>{
    settext(event.target.value);
  }
  const handlespace=(e)=>{
    e.preventDefault();
    let newtext=text.split(/[ ]+/);
    settext(newtext.join(" "));
  }
  const handlecopy=(e)=>{
    e.preventDefault();
    navigator.clipboard.writeText(text);
    let cpy=document.querySelector('.texts');
    cpy.innerHTML='Copied';
    setTimeout(() => {
      cpy.innerHTML='Copy';
    }, 3000);
  }
  const handledownload=()=>{
         const link = document.createElement("a");
         const file = new Blob([text], { type: 'text/plain' });
         link.href = URL.createObjectURL(file);
         link.download = "sample.txt";
         link.click();
         URL.revokeObjectURL(link.href);
  }
  const[text,settext]=useState('');
  const[show,setshow]=useState(false);
    return (
      <div className="docx">
      <div className="form-container">
      <form className="form">
        <div className="form-group">
        <button className="del-button" onClick={handledelete}>
  <svg viewBox="0 0 448 512" className="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
</button>
          <label htmlFor="textarea">Enter Your Text Here: </label>
          <textarea value={text} onChange={handleOnChange} cols="80" rows="10" id="textarea" name="textarea">          </textarea>
        </div>
        {/* <button type="submit" onClick={handleOnClick} className="form-submit-btn">Case Change</button> */}
        <div className="but-container">
        <button  className="css-i6dzq1" onClick={handleUpClick}>
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>Case Change (U)
</button>
<button  className="css-i6dzq1" onClick={handleLoClick}>
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>Case Change (L)
</button>
<button className="count" onClick={countfunc}>
  <svg
    aria-hidden="true"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
      strokeLinejoin="round"
      strokeLinecap="round"
    ></path>
  </svg>
Count Words
</button>
<button className="btn-space" onClick={handlespace}>
    <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" className="sparkle">
        <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
    </svg>

    <span className="textz">Remove Extra Space</span>
</button>
<button className="botao" onClick={handledownload}>
  <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mysvg"><g id="SVGRepo_bgCarrier" strokeWidth="0">
    </g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
       <g id="Interface / Download"> 
       <path id="Vector" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" stroke="#f1f1f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
       </path>
    </g> </g>
  </svg>
  <span className="texto">Download</span>
</button>
</div>
      </form>
    </div>
    {
    show && <div className="info">
    <div className="info__icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none"><path fill="#393a37" d="m12 1.5c-5.79844 0-10.5 4.70156-10.5 10.5 0 5.7984 4.70156 10.5 10.5 10.5 5.7984 0 10.5-4.7016 10.5-10.5 0-5.79844-4.7016-10.5-10.5-10.5zm.75 15.5625c0 .1031-.0844.1875-.1875.1875h-1.125c-.1031 0-.1875-.0844-.1875-.1875v-6.375c0-.1031.0844-.1875.1875-.1875h1.125c.1031 0 .1875.0844.1875.1875zm-.75-8.0625c-.2944-.00601-.5747-.12718-.7808-.3375-.206-.21032-.3215-.49305-.3215-.7875s.1155-.57718.3215-.7875c.2061-.21032.4864-.33149.7808-.3375.2944.00601.5747.12718.7808.3375.206.21032.3215.49305.3215.7875s-.1155.57718-.3215.7875c-.2061.21032-.4864.33149-.7808.3375z"></path></svg>
    </div>
    <div className="info__title"> {text==""?0:text.trim().split(" ").length} words and {text.length} characters</div>
    <div className="info__close" onClick={crossfunc}><svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z" fill="#393a37"></path></svg></div>
</div>
}
<div className="card">
    <div className="border"> <p className="prev">{text}</p></div>
    <div className="content">
      <div className="img-con">
      <img  className="primg" src="pr.png"></img>
     
      </div>
      <button className="Btn-copy" onClick={handlecopy}>
  <span className="texts">Copy</span>
  <span className="svgIconz">
    <svg fill="white" viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M280 64h40c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64H280zM64 112c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H304v24c0 13.3-10.7 24-24 24H192 104c-13.3 0-24-10.7-24-24V112H64zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"></path></svg>
  </span>
</button>
    </div>
    <span className="bottom-text">Preview text</span>
  </div>
</div>
    )
}

