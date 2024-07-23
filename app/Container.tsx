'use client'

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="
      max-w-[1520px] 
      mx-auto 
      px-4 
      sm:px-6 
      md:px-8 
      lg:px-10 
      xl:px-14 
      2xl:px-20
     ">
      {children}
    </div>
  );
}

export default Container
