const Container = ({ children }) => {
    return (
        <div className="min-h-[calc(100vh-260px)] container mx-auto">
            {children}
        </div>
    );
};

export default Container;