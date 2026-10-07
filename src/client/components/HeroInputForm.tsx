export const HeroInputForm = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col gap-32 lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sup! 😵</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <input
                className="input validator"
                type="email"
                required
                placeholder="mail@site.com"
              />
              <div className="validator-hint">Enter valid email address</div>
              <input
                type="password"
                className="input validator"
                required
                placeholder="Password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              />
              <p className="validator-hint">
                Must be more than 8 characters, including
                <br />
                At least one number
                <br />
                At least one lowercase letter
                <br />
                At least one uppercase letter
              </p>
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};
