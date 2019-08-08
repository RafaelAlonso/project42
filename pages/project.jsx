import { useRouter } from 'next/router';
import Layout from '../components/mainLayout';
import Link from 'next/link';

const Project = () => {
  // needed to read the url (and get the title)
  const router = useRouter();

  return (
    <Layout>

      {/* get the titile from the url query */}
      <h1>{router.query.title}</h1>

      {/* content */}
      <p>This is the project content.</p>

      {/* back link */}
      <Link href='/projects'>
        <a>Back to projects</a>
      </Link>
    </Layout>
  );
};

export default Project;
