import '@sass/auth/auth.scss'

function Auth(){
    return (
			<div className='auth'>
				<form>
					<div className='form-head'>
						<h1>Login</h1>
						<p>Please login using account detail bellow.</p>
					</div>
					<div className="form-bottom">
						<input placeholder='Email Adress' />
						<input placeholder='Password' />
                        <a>Forgot your pasword?</a>
                        <button>Log In</button>
					</div>
                    <p>Don't have an Account?<span>Create account</span></p>
				</form>
			</div>
		)

}
export default Auth