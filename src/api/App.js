import React, { useEffect, useState } from 'react';
import { View, StatusBar, SafeAreaView, ActivityIndicator } from 'react-native';
import HomeScreen from '../components/ContentCard';
import { getToken } from './api';
import Loader from '../components/Loader';
import ErrorView from '../components/ErrorView';
import { colors } from './theme';

const EMAIL = "lalitnagwan0@gmail.com"; // CHANGE THIS to your email for real use.

const App = () => {
  const [token, setToken] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchToken = async () => {
    setLoading(true);
    setError("");
    try {
      const t = await getToken(EMAIL);
      setToken(t);
    } catch (e) {
      setError("Failed to get token.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchToken();
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorView message={error} onRetry={fetchToken} />;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar barStyle="dark-content" />
      <HomeScreen token={token} />
    </SafeAreaView>
  );
};

export default App;