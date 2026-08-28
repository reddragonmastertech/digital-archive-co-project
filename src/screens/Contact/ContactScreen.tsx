import { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput } from 'react-native';
import { Card, ScreenContainer } from '../../components';
import { useTheme } from '../../theme';

export function ContactScreen() {
  const { colors, spacing, radius, typography } = useTheme();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const canSubmit = email.trim().length > 0 && message.trim().length > 0;

  const inputStyle = {
    backgroundColor: colors.surfaceAlt,
    borderColor: colors.border,
    borderRadius: radius.md,
    color: colors.text,
    padding: spacing.md,
    marginTop: spacing.sm,
  };

  return (
    <ScreenContainer
      title="Contact"
      subtitle="Questions, feedback or bug reports — we read everything.">
      <Card>
        <Text style={[typography.caption, { color: colors.textMuted }]}>
          Email
        </Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="you@example.com"
          placeholderTextColor={colors.textMuted}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={[styles.input, inputStyle]}
        />

        <Text
          style={[
            typography.caption,
            { color: colors.textMuted, marginTop: spacing.lg },
          ]}>
          Message
        </Text>
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="How can we help?"
          placeholderTextColor={colors.textMuted}
          multiline
          textAlignVertical="top"
          style={[styles.input, styles.multiline, inputStyle]}
        />

        <Pressable
          accessibilityRole="button"
          disabled={!canSubmit}
          onPress={() => {
            Alert.alert('Message sent', 'We will get back to you shortly.');
            setEmail('');
            setMessage('');
          }}
          style={({ pressed }) => [
            styles.button,
            {
              backgroundColor: colors.primary,
              borderRadius: radius.md,
              padding: spacing.md,
              marginTop: spacing.lg,
              opacity: !canSubmit ? 0.4 : pressed ? 0.85 : 1,
            },
          ]}>
          <Text style={[typography.tabLabel, styles.buttonLabel]}>Send</Text>
        </Pressable>
      </Card>

      <Card
        title="Other ways to reach us"
        description={'support@example.com\n+1 (555) 010-0199\nMon–Fri, 9am–6pm'}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    fontSize: 15,
  },
  multiline: {
    minHeight: 110,
  },
  button: {
    alignItems: 'center',
  },
  buttonLabel: {
    color: '#FFFFFF',
  },
});

export default ContactScreen;
