import { useState, useEffect, type ReactNode } from 'react';
import { getAllDucks } from '../data';
import { DuckContext } from '.';
import type { Duck } from '../types';

type DuckProvicerProps = {
  children: ReactNode;
};

const DuckProvider = ({ children }: DuckProvicerProps) => {
  const [ducks, setDucks] = useState<Duck[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const abortController = new AbortController();
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const duckData = await getAllDucks(abortController);
        setDucks(duckData);
      } catch (error) {
        if (error instanceof Error && error.name === 'AbortError') {
          console.info('Fetch Aborted');
        } else {
          console.error(error);
          setError('Error bringing ducks to the pond.');
        }
      } finally {
        setLoading(false);
      }
    })();

    return () => {
      abortController.abort();
    };
  }, []);
  return (
    <DuckContext value={{ ducks, setDucks, loading, error }}>
      {children}
    </DuckContext>
  );
};

export default DuckProvider;
