export default function Hero() {
    return (    
        <div className="flex flex-col md:flex-row h-screen">
            <div className="flex-1 p-4">
                <h1 className={`text-6xl md:text-8xl font-extrabold mb-6 fira-code-font`}>
                    Hi my name is Ivan<span className="blinking-cursor">|</span>
                </h1>
                <h2 className="text-3xl md:text-5xl font-medium mb-2 text-slate-500">Undergraduate computer science student</h2>
            </div>
            <div className="flex-1 p-4">
                <h1></h1>
            </div>
        </div>
    );
}