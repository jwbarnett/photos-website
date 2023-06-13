import Link from 'next/link';

const Header = () => {
  return (
    <div className="mb-20">
      <div>
        <Link href="/" className="hover:underline text-4xl mx-5">James Barnett</Link>
      </div>
    </div>
  );
}
  
export default Header;
