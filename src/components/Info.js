function Info() {
    return (
        <div>
            <img src="../assets/daffa.jpg" className="profile--pic" />
            <div className="personal--info">
                <h1>Mochammad Daffa Daniarfa Darmawan</h1>
                <h2>Software Engineer</h2>
                <a href="https://github.com/daniarfadd">github.com/daniarfadd</a>
            </div>

            <div className="contact">

                <div className="contact--email">
                    <p>Email</p>
                    <img src="../assets/mail.png"/>
                </div>

                <div className="contact--linkedin">
                    <p>LinkedIn</p>
                    <img src="../assets/linkedin.png"/>
                </div>

            </div>

        </div>
    );
}

export default Info;