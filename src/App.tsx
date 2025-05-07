import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from "@/components/ui/title";
import {useCounter} from "@/hooks/userCounter";

function App() {
    const { state } = useCounter();
    return (
        <div className="flex flex-col flex-1 items-center justify-center gap-10">
            <div className="text-center">
                <div className={"flex justify-center items-center"}>
                    <a href="https://vite.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo"/>
                    </a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo"/>
                    </a>
                </div>
                <Title className={"font-bold"}>Vite + React</Title>
                <div className="flex justify-center items-center m-3 text-center h-20 border-2 border-indigo-600 border-dashed">
                    <Title>counting: {state.count} </Title>
                </div>
                <div className="card">
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
                <p className="read-the-docs">
                    Click on the Vite and React logos to learn more
                </p>
            </div>
        </div>
    )
}

export default App
