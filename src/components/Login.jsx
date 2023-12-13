import { useState, React } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // ログインの処理を実装する
        if (email.trim() !== '' && password.trim() !== '') {
            // ログイン成功の場合、トークンを保存するなどの処理を行う
            console.log("ログインに成功しました。");
            // 例: トークンをローカルストレージに保存する
            localStorage.setItem('token', 'example_token');

            // ダッシュボードページにリダイレクトする
            navigate('/dashboard');
        } else {
            // ログイン失敗の場合の処理を行う（例: エラーメッセージの表示）
            console.log('ログインに失敗しました');
        }
    };

    return (
        <div>
            <Header />
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
                </div>
                <div className="mx-auto max-w-2xl sm:py-10">
                    <div className="text-center flex-col space-y-4">
                        <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-xl">login</h1>
                        <form>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">email
                                <input
                                    className="bg-gray-300 border-1 rounded-md p-2 m-2"
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                </label>
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">password
                                <input
                                    className="bg-gray-300 border-1 rounded-md p-2 m-2"
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                </label>
                            </div>
                            <button className="
                                bg-gray-300
                                border-0
                                p-2
                                rounded-md
                                hover:bg-gray-400
                                hover:text-white" type="button" onClick={handleLogin}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;